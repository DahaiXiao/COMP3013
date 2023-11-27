
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function EditPage({ params }: any ){
 
  let blockData = { title: '', tag: '', code: '' };

    const data = await db.block.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if(data){
       blockData = data ;   
    }

        async function updateForm(formData:FormData){
          "use server"
          const title = formData.get("title") as string;
          const tag =formData.get("tag") as string;
          const code =formData.get("code") as string;
          

          await db.block.update({
            where: {
              id: parseInt(params.id),
            },
            data: {
              title,
              tag,
              code,
            },
          });
//redirect the user back to the home page
redirect("/")
        }
      return (
        <form action={updateForm}>
          <h3 className="font-bold m-3">Edit Block </h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label className="w-12" htmlFor="title">
                Title
              </label>
              <input
                className="border rounded p-2 w-full"
                type="text"
                name="title"
                id="title"
                defaultValue={blockData.title}
                 />
            </div>
           
            <div className="flex gap-4">
              <label className="w-12" htmlFor="tag">
               tag
              </label>
              <input
                className="border rounded p-2 w-full"
                type="text"
                name="tag"
                id="tag"
                defaultValue={ blockData.tag}  
              />
            </div>
    
    
            <div className="flex gap-4">
              <label className="w-12" htmlFor="code">
                Code
              </label>
              <textarea
                className="border rounded p-2 w-full"
                name="code"
                id="code"
                defaultValue={ blockData.code}  
              />
            </div>
            <button type="submit" className="rounded p-2 bg-pink-200">
             save
            </button>
           
          </div>
        </form>
      );
}

