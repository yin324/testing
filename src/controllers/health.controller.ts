import {Router, Response} from "express";

const router = Router();

router.get("/", (_req: never, res: Response) => {
  console.log("Testing");
  res.send("OK");
});

export const HealthController: Router = router;

