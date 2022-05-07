export default function Bottombar (){
    const icons = [
        "home",
        "search-outline",
        "add-circle-outline",
        "heart-outline",
        "person-outline"
    ];

    return (
        <div className="bottombar-mobile">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}