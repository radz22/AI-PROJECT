import { Request, Response } from "express";
export const googleAuth = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
