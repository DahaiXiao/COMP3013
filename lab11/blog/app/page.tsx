import {db} from "@/db"
import Link from "next/link";

export default async function Home() {

const blocks = await db.block.findMany();

const renderedBlocks = blocks.map((block) => (

 <Link
key = {block.id}
href ={`/blocks/${block.id}`}>
<ul>
<li>{block.title}<br></br>

<button  className="rounded p-2 bg-pink-200">
          VIEW
        </button>

<p>-----------------------</p>
</li>
</ul>
</Link>

));


  return(
  
  <div>
    <h3>This is home page showing all blocks</h3>
    <p>................................</p>
    <ol>{renderedBlocks}</ol> 

     </div>
  
  );
}