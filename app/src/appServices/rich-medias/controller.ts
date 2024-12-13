import { RequestHandler } from "express";

import { RichMedia } from "../../../types";
import richMediaData from "../../../data.json";

const richMedias: Array<RichMedia> = richMediaData;

export const getRichMedias: RequestHandler = async (_req, res) => {
  try {
    res.send(richMedias);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRichMediaByTool: RequestHandler = async (req, res) => {
  try {
    const tools = (req.body as { tools: string[] }).tools;

    let richMediasFiltered: Array<RichMedia> = [...richMedias];

    tools.forEach((tool) => {
      richMediasFiltered = richMediasFiltered.filter(
        (richMedia) => richMedia.tools.indexOf(tool) !== -1
      );
    });

    res.send(richMediasFiltered);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
