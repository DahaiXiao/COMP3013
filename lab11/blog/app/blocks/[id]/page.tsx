"use client";
import Link from "next/link";
import DeleteBtn from "../delete/[id]/page";


export default function BlockShowPage({ params }: any) {

  const handleDeleteClick = async () => {
    await DeleteBtn(params.id);

    }

  return (
    <div>
      <h1>Our id is {params.id}</h1>
      <h1>{params.code}</h1>

      <Link href={`/blocks/edit/${params.id}`}>
        <button type="submit" className="rounded p-2 bg-pink-200">
          Edit
        </button>
      </Link>

      <button onClick={handleDeleteClick} className="rounded p-2 bg-pink-200">
        Delete
      </button>
    </div>
  );
}
