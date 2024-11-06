
export default function Item({name, quantity, category, onSelect }){

    let styles="p-2 bg-stone-200 mb-2 w-1/2 ml-3"

    return(
        <div className = {styles} onClick={() => onSelect(name)}>
            <p className = "font-bold text-xl">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
    
}