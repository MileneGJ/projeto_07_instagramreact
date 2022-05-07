export default function Header (){
    const iconsDesktop = [
        "paper-plane-outline",
        "compass-outline",
        "heart-outline",
        "person-outline"
    ]

    return ( 
        <div>
            <div className="topo">
                <div>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./images/logo.png" />
                </div>
            
                <input className="pesquisar" placeholder="Pesquisar" />
                    
                <div className="icones">
                    {iconsDesktop.map(icons => <ion-icon name={icons}></ion-icon>)}
                </div>
            </div>

            <div className="topo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./images/logo.png" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </div>
    );
}