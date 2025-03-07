import { NextRequest } from "next/server";
import { users } from "./mockData";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page: number = Number(searchParams.get('page') ?? 1);
  const limit: number = Number(searchParams.get('limit') ?? 5);
  const response = {
    data: users.slice(((page - 1) * limit), (page * limit)),
    pagination: {
      total: users.length,
      currentPage: page,
      totalPages: Math.ceil(users.length / limit),
      nextPage: page + 1,
      prevPage: (page - 1) >= 0 ? page - 1 : null,
      limit,
    }
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}