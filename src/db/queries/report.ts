import { db } from "@/db";
import { Report } from "@prisma/client";

// Assuming this type mirrors the fields in your Prisma Report model
export interface ReportwithContentAndLink extends Report {
  contentDescription: string;
  link: string;
}

export const getReportsWithContentDescription = async (): Promise<
  ReportwithContentAndLink[]
> => {
  // Fetch all reports
  const reports = await db.report.findMany({
    include: {
      author: {
        select: {
          name: true,
        }
      }
    }
  });
  // An async function to fetch the description based on report contentType
  async function fetchDescription(report: Report): Promise<string[]> {
    let description = "";
    let link = "";
    if (report.contentType === "GAME") {
      const game = await db.game.findUnique({
        where: { id: report.reportId },
        select: { description: true, id: true },
      });
      description = game?.description || "";
      link = `/detail/${game?.id}` || "";
    } else if (report.contentType === "REVIEW") {
      const review = await db.review.findUnique({
        where: { id: report.reportId },
        select: { description: true, gameId: true },
      });
      description = review?.description || "";
      link = `/detail/${review?.gameId}` || "";
    }
    return [description, link];
  }

  // Map over reports to fetch and assign descriptions
  const reportsWithDescriptions: ReportwithContentAndLink[] = await Promise.all(
    reports.map(async (report): Promise<Report> => {
      const description = await fetchDescription(report);
      return {
        ...report,
        contentDescription: description[0],
        link: description[1],
      };
    })
  );

  return reportsWithDescriptions;
};
