// This demonstrates getting the user from cookies (rather than from an ID
// token) by using the `getUserFromCookies` method.

import { AuthUser, getUserFromCookies } from "next-firebase-auth";
import { NextApiRequest, NextApiResponse } from "next";
import initAuth from "../../utils/initAuth";

initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user: AuthUser;
  try {
    user = await getUserFromCookies({ req });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(403).json({ error: "Not authorized" });
  }
  const animals = [
    "monkeys",
    "horses",
    "seahorses",
    "sea monkeys",
    "dogs",
    "cats",
    "porcupines",
    "sugar gliders",
  ];
  const favoriteAnimal = animals[Math.floor(Math.random() * animals.length)];
  return res.status(200).json({ favoriteAnimal, email: user.email });
};

export default handler;
