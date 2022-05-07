export default function Stories () {
const profiles = [{
        image:"./images/9gag 1.png",
        name:"9gag"
    },{
        image:"./images/meowed 1.png",
        name:"meowed"
    },{
        image:"./images/barked 1.png",
        name:"barked"
    },{
        image:"./images/nathanwpylestrangeplanet 1.png",
        name:"nathanwpylestrangeplanet"
    },{
        image:"./images/wawawiwacomicsa 1.png",
        name:"wawawiwacomicsa"
    },{
        image:"./images/respondeai 1.png",
        name:"respondeai"
    },{
        image:"./images/filomoderna 1.png",
        name:"filomoderna"
    },{
        image:"./images/memeriagourmet 1.png",
        name:"memeriagourmet"
    }
]

    return (
        <div className="stories horizontal">
            {profiles.map(profile =>
                <div>
                    <div className="molde-foto">
                        <img src="./images/stories_background.jpg"/>
                        <div className="foto-interior"><img src={profile.link} /></div>
                    </div>
                    <h2>{profile.name}</h2>
                </div>)}
                <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}