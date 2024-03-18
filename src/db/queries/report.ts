import { db } from '@/db';
import { Report, gameType } from '@prisma/client';
import { ReportWithContentAndAuthor } from '.';

export const getReportsWithContentDescription = async (): Promise<
  ReportWithContentAndAuthor[]
> => {
  const reports = await db.report.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  async function fetchDescription(report: Report): Promise<[string, number]> {
    let description = '';
    let gameId = -1;
    if (report.contentType === 'GAME') {
      const game = await db.game.findUnique({
        where: { id: report.reportId },
        select: { description: true, id: true },
      });
      if (!game) throw new Error('Game does not exist');
      description = game.description;
      gameId = game.id;
    } else if (report.contentType === 'REVIEW') {
      const review = await db.review.findUnique({
        where: { id: report.reportId },
        select: { description: true, gameId: true },
      });
      // if (!review) throw new Error('Review does not exist');
      description = review?.description || '';
      gameId = review?.gameId || -1;
    }
    return [description, gameId];
  }

  return await Promise.all(
    reports.map(async (report) => {
      const data = await fetchDescription(report);
      return {
        ...report,
        contentDescription: data[0],
        gameId: data[1],
      };
    })
  );
};
