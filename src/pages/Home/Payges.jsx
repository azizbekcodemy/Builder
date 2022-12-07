import { Box } from "@mui/system";
import Carusel from "./Carusel/Carusel"
import Sonya from "./Sonya/Sonya";
import Ask from "./Ask";
import Blog from "./blog";
import Corousel from "./corousel";
import Meet from "./Meet";
import SinglePages from "./singlepage";
import Video from "./video";
import Uch2 from "./Uch2/Uch2";
import Rasm from "./Rasm/Rasm";
import Hover from "./Hover/Hover";
function Payges() {
    return(
        <Box>
            <Carusel />
            <Uch2 />
            <Rasm />
            <Sonya />
            <Hover />
            <Video/>
            <Meet/>
            <Ask/>
            <Corousel/>
            <Blog/>
        </Box>
    )
}
export default Payges ;