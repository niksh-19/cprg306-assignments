
export default function Item({name, quantity, category}){

    let styles="p-2 bg-stone-200 mb-2 w-1/4 ml-3"

    return(
        <div className = {styles}>
            <p className = "font-bold text-xl">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
    
}