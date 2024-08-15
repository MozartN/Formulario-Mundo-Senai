import { extendTheme } from "@chakra-ui/react";

export const global = extendTheme ({styles:{
    global:{
        "html,body":{
            fontSize: "17px",
            fontFamily: "Arial",
            border:"2px",
            padding:"gray.300",
            borderRadius: "4px"
            
        }
    }
}})