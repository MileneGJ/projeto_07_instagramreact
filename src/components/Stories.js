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

    function Story (props) {
        return(
            <div>
            <div className="molde-foto">
                <img src="./images/stories_background.jpg" alt=""/>
                <div className="foto-interior">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <h2>{props.name}</h2>
        </div>
        );
    }

    return (
        <div className="stories horizontal">
            {profiles.map(profile => <Story
                image={profile.image}
                name={profile.name} />
                )}
                <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}