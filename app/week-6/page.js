import ItemList from "./item-list";

export default function Page(){

    return(
        <main>
            <h1 className = "text-4xl m-2 mb-4 font-bold font-sans" >Shopping List</h1>
            <ItemList/>
        </main>
    );
}