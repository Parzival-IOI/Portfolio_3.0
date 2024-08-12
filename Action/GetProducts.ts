"use server"

const GetProducts = async () => {
  try {

    const url = new URL(process.env.API + "v1/api/project/findAll");
    url.searchParams.append("orderBy", "DESC");
    url.searchParams.append("sortBy", "ID");
    url.searchParams.append("page", "0");
    url.searchParams.append("size", "100");

    const projects = await fetch(url, {
      method: "GET",
    })

    if(projects.ok) {
      return await projects.json();
    }

    throw new Error("something went wrong");

  } catch(e: any) {
    throw new Error(e);
  }
}