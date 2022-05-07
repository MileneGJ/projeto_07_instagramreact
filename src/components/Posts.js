export default function Posts () {
    const userPost= [{
        profImage:"./images/meowed 1.png",
        profName:"meowed",
        type:"image",
        link:"./images/gato-telefone 1.png",
        description:"Na internet até tarde",
        liked:{
            profImage:"./images/respondeai 1.png",
            profName:"respondeai",
            total:"101.523"
        },
        totalComments:"3",
        comments:{
            profImage:"./images/barked 1.png",
            profName:"barked",
            text:"Que linda foto"
        }
    },{
        profImage:"./images/barked 1.png",
        profName:"barked",
        type:"image",
        link:"./images/dog 1.png",
        description:"Cansei...",
        liked:{
            profImage:"./images/adorableanimals 2.png",
            profName:"adorable_animals",
            total:"99.159"
        },
        totalComments:"4",
        comments:{
            profImage:"./images/filomoderna 1.png",
            profName:"filomoderna",
            text:"A bagunça que deixou no quarto ninguém vê"
        }
    },{
        profImage:"./images/meowed 1.png",
        profName:"meowed",
        type:"video",
        link:"/projeto2-instagram/Arquivos Úteis/video",
        description:"Flagrante no rio",
        liked:{
            profImage:"./images/respondeai 1.png",
            profName:"respondeai",
            total:"167.321"
        },
        totalComments:"2",
        comments:{
            profImage:"./images/badvibesmemes 1.png",
            profName:"badvibesmemes",
            text:"Wow, incrível!!!"
        }
    }
]
    return (
        <div className="posts">
            {userPost.map(function(user){
                if(user.type==="image"){
                    const postContent = (
                        <img src={user.link}/>
                    )
                } else if (user.type==="video"){
                    let mp4 = user.link+".mp4";
                    let ogg = userlink+".ogv";
                    const postContent = (
                    <video controls autoPlay muted>
                        <source src={mp4} type="video/mp4" />
                        <source src={ogg} type="video/ogg" />
                        Seu navegador não suporta vídeos.
                    </video>
                    )
                }
                return (
                    <div>
                        <div className="barra acima">
                            <div className="horizontal">
                                <img src={user.profImage}/>
                                <h1>{user.profName}</h1>
                            </div>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                        {postContent}
                        <div className="barra abaixo">
                            <div className="icones2 barra">
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        <div className="curtidas">
                            <img src={user.liked.profImage}/>
                            <p>Curtido por <strong>{user.liked.profName}</strong>  e <strong>outras {user.liked.total} pessoas</strong></p>
                        </div>
                        <div className="curtidas">
                            <img src={user.profImage}/>
                            <p><strong>{user.profName}</strong> {user.description}</p>
                        </div>
                        <h2 className="maior claro">Ver todos os {user.totalComments} comentários</h2>
                        <div className="comentario curtidas barra">
                            <div>
                                <img src={user.comments.profImage}/>
                                <p><strong>{user.comments.profName}</strong> {user.comments.text}</p>
                            </div>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div className="add-comentario barra">
                            <div>
                                <img src="./images/catanacomics 1.png"/>
                                <input type="text" placeholder="Adicione um comentário..."/>
                            </div>
                            <button>Publicar</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}