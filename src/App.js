import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";

export default function App (){
    return(
        <div>
            <Header />
            <div className="container horizontal">
                <Content />
                <Sidebar />
                <Bottombar />
            </div>
        </div>
    )
}