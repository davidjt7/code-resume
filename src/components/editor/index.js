import React, { useContext } from 'react';
import { Wrapper, Pre, PageWrap, LineNo } from './style';
import { ThemeContext } from 'styled-components';

const Editor = (props) => {  
    const theme = useContext(ThemeContext);        
    const tab = props.path;
    const fTabName = tab.charAt(0).toUpperCase();
    const rTabName = tab.slice(1);
    const content = props.data && props.data[tab];       
    const head = `export default ${fTabName}${rTabName};`;
    let count = 0, color = '';

    const detail = content.split("\n").concat(head).map((str, index) => {
        if (count >= 6) count = 0;
        if (index >= 6) {
            color = theme.contentColor[`color${count}`];
            count++;
        } else {
            color = theme.contentColor[`color${index}`]
        }      
        
        let renderPre = (
            <Pre 
                initial={{ x: 10 }}
                animate={{x: 0}}
                whileHover={{ x: 5 }} 
                transition={{ duration: .2 }} 
                key={`${str + index}-detail`} 
                color={color}
            >{str}</Pre>
        );

        if (str.includes('href=')) {
            renderPre = (
                <Pre 
                    initial={{ x: 10 }}
                    animate={{x: 0}}
                    whileHover={{ x: 5 }} 
                    transition={{ duration: .2 }} 
                    key={`${str + index}-detail`} 
                    color={color}
                    dangerouslySetInnerHTML={{__html: str}}></Pre>
            )
        } 

        return (
            <PageWrap key={index}>
                <LineNo>{index + 1}</LineNo>
                {renderPre}
            </PageWrap>
        )
    });
    
    return (
        <Wrapper>
            {detail}
        </Wrapper>
    )
}

export default Editor;