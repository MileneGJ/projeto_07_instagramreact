export default function Sidebar () {
    const toFollow = [{
        profImage:"./images/badvibesmemes 1.png",
        profName:"bad.vibe.memes",
        status:"Segue você"
    },{
        profImage:"./images/chibirdart 1.png",
        profName:"chibirdart",
        status:"Segue você"
    },{
        profImage:"./images/razoesparaacreditar 1.png",
        profName:"razoesparaacreditar",
        status:"Novo no Instagram"
    },{
        profImage:"./images/adorableanimals 2.png",
        profName:"adorable_animals",
        status:"Segue você"
    },{
        profImage:"./images/smallcutecats 1.png",
        profName:"smallcutecats",
        status:"Segue você"
    }]

    function SugFollowers (props) {
        return(
        <div className="contas barra horizontal">
        <div>
            <img src={props.profImage} alt="" />
            <div className="coluna">
                <h1>{props.profName}</h1>
                <h2 className="claro">{props.status}</h2>
            </div>
        </div>
        <h3 className="bold">Seguir</h3>
    </div>
        );
    }

    function UserProfile (props){
        return(
        <div className="perfil horizontal">
            <img src={props.profImage} alt="" />
            <div className="coluna">
                <h1>{props.profName}</h1>
                <h2 className="claro maior">{props.userName}</h2>
            </div>
        </div>
        );
    }
    
    return (
        <div>
            <div className="sidebar-frame"></div>    
            <div className="sidebar">
                <UserProfile 
                    profImage="./images/catanacomics 1.png"
                    profName="catanacomics"
                    userName="Catana" />
                    
                <div className="barra horizontal">
                        <h2 className="bold claro">Sugestões para você</h2>
                        <h2 className="bold">Ver tudo</h2>
                </div>
                {toFollow.map(follow => <SugFollowers 
                        profImage={follow.profImage}
                        profName={follow.profName}
                        status={follow.status} />
                )}
                <p className="espaco-rodape rodape">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma</p>
                <p className="rodape">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}