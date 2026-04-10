import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const session = await getServerSession();

    if (!session) {
      return Response.json({ error: "Not logged in" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("ysyinspire");
    const collection = db.collection("checkins");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingCheckin = await collection.findOne({
      email: session.user.email,
      date: today,
    });

    if (existingCheckin) {
      return Response.json({ message: "already_checked_in" }, { status: 200 });
    }

    await collection.insertOne({
      email: session.user.email,
      date: today,
      createdAt: new Date(),
    });

    return Response.json({ message: "checked_in" }, { status: 201 });
  } catch (error) {
    console.error("Checkin error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
