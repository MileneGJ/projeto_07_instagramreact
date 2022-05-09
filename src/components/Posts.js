import React from "react";

export default function Posts() {

    //Criando manualmente para cada post uma variável de mudança de cor do botão 'Like'
    const [useColor1, setColor1] = React.useState("fill");
    const [useColor2, setColor2] = React.useState("fill");
    const [useColor3, setColor3] = React.useState("fill");

    const infosPost = [{
        userImage: "./images/catanacomics 1.png",
        profImage: "./images/meowed 1.png",
        profName: "meowed",
        classIcon:useColor1,
        type: "image",
        link1: "./images/gato-telefone 1.png",
        link2: "",
        description: "Na internet até tarde",
        liked: {
            profImage: "./images/respondeai 1.png",
            profName: "respondeai",
            total: "101.523"
        },
        totalComments: "3",
        comments: {
            profImage: "./images/barked 1.png",
            profName: "barked",
            text: "Que linda foto"
        }
    }, {
        userImage: "./images/catanacomics 1.png",
        profImage: "./images/barked 1.png",
        profName: "barked",
        classIcon:useColor2,
        type: "image",
        link1: "./images/dog 1.png",
        link2: "",
        description: "Cansei...",
        liked: {
            profImage: "./images/adorableanimals 2.png",
            profName: "adorable_animals",
            total: "99.159"
        },
        totalComments: "4",
        comments: {
            profImage: "./images/filomoderna 1.png",
            profName: "filomoderna",
            text: "A bagunça que deixou no quarto ninguém vê"
        }
    }, {
        userImage: "./images/catanacomics 1.png",
        profImage: "./images/meowed 1.png",
        profName: "meowed",
        classIcon:useColor3,
        type: "video",
        link1: "./images/video.mp4",
        link2: "./images/video.ogv",
        description: "Flagrante no rio",
        liked: {
            profImage: "./images/respondeai 1.png",
            profName: "respondeai",
            total: "167.321"
        },
        totalComments: "2",
        comments: {
            profImage: "./images/badvibesmemes 1.png",
            profName: "badvibesmemes",
            text: "Wow, incrível!!!"
        }
    }
    ]

    function Comment (props) {
        return (                
        <div className="comentario curtidas barra">
            <div>
                <img src={props.ProfImage} alt="" />
                <p><strong>{props.ProfName}</strong> {props.Text}</p>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
        </div>)
    }

    function Post(props) {

        //Criando conteúdo de post a depender do tipo de mídia (imagem ou vídeo)
        let postContent;
        if (props.type === "image") {
            postContent = (
                <img onClick={() => giveLike(props.link1,false)} src={props.link1} alt="" />
            )
        } else if (props.type === "video") {
            postContent = (
                <video onClick={() => giveLike(props.link1,false)} controls autoPlay muted>
                    <source src={props.link1} type="video/mp4" />
                    <source src={props.link2} type="video/ogg" />
                    Seu navegador não suporta vídeos.
                </video>
            )
        }


        return (
            <div>
                <div className="barra acima">
                    <div className="horizontal">
                        <img src={props.profImage} alt="" />
                        <h1>{props.profName}</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>

                {postContent}

                <div className="barra abaixo">
                    <div className="icones2">
                        <div className="outline">
                            <ion-icon onClick={() => giveLike(props.link1, true)} name="heart-outline"></ion-icon>
                            <div>
                                <ion-icon class={props.classIcon} onClick={() => giveLike(props.link1, true)} name="heart"></ion-icon>
                            </div> 
                        </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="curtidas">
                    <img src={props.likedProfImage} alt="" />
                    <p>Curtido por <strong>{props.likedProfName}</strong>  e <strong>outras {props.likedTotal} pessoas</strong></p>
                </div>
                <div className="curtidas">
                    <img src={props.profImage} alt="" />
                    <p><strong>{props.profName}</strong> {props.description}</p>
                </div>
                <h2 className="maior claro">Ver todos os {props.totalComments} comentários</h2>
                <Comment 
                profImage={props.commentsProfImage}
                profName={props.commentsProfName}
                text={props.commentsText}
                />
                <div className="add-comentario barra">
                    <div>
                        <img src={props.userImage} alt="" />
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        )
    }

    //Ação de dar 'Like' a depender do post clicado
    function giveLike (link,toggle) {
        if(link==="./images/gato-telefone 1.png"){
            if(useColor1==="fill"){
                setColor1("fill selecionado");
            }else if(toggle){
            setColor1("fill");
            }
        }
        if(link==="./images/dog 1.png"){
            if(useColor2==="fill"){
                setColor2("fill selecionado");
            }else if(toggle){
            setColor2("fill");
            }
        }
        if(link==="./images/video.mp4"){
            if(useColor3==="fill"){
                setColor3("fill selecionado");
            }else if(toggle){
            setColor3("fill");
            }
        }
    }

    return (
        <div className="posts">
            {infosPost.map(post =>
                <Post
                    userImage={post.userImage}
                    profImage={post.profImage}
                    profName={post.profName}
                    classIcon={post.classIcon}
                    type={post.type}
                    link1={post.link1}
                    link2={post.link2}
                    description={post.description}
                    likedProfImage={post.liked.profImage}
                    likedProfName={post.liked.profName}
                    likedTotal={post.liked.total}
                    totalComments={post.totalComments}
                    commentsProfImage={post.comments.profImage}
                    commentsProfName={post.comments.profName}
                    commentsText={post.comments.text} />
            )}
        </div>
    );
}