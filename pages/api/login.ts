import { setAuthCookies } from "next-firebase-auth";
import { NextApiRequest, NextApiResponse } from "next";
import initAuth from "../../utils/initAuth";
export const config = {
  runtime: "experimental-edge",
};

initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setAuthCookies(req, res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(200).json({ status: true });
};

export default handler;
