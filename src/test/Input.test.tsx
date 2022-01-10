import { render, screen, fireEvent,waitFor, wait } from '@testing-library/react'
import { Input, SearchBar } from '../components';
import { Star } from 'react-feather';
import React, {useState} from 'react'
import userEvent from '@testing-library/user-event';


describe("Input", () => {
    it("render", () => {
        render(
            <Input/>
        )
        expect(screen.getByTestId("input")).toBeInTheDocument()
    })
   
    it("icon", () => {
        render(
            <Input
                icon={<Star data-testid="icon"/>}
            />
        )
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
})

describe("SearchBar", () => {
    it("render", () => {
        render(
            <SearchBar/>
        )
        expect(screen.getByTestId("searchbar")).toBeInTheDocument()
    })
})

// checking hover


// checking focus input.focus()

//checking text border color change

// check seleccionar tipo big y small 
it("big_test", () => {
    render(
        <Input
        type={"big"}
        data-testid="bigger"
        />
    )
    const input1 = screen.getByTestId("bigger")
    //fireEvent.mouseOver(input1);
    expect(input1).toHaveStyle(`height:48px`);
})
it("small_test", () => {
    render(
        <Input
        type={"small"}
        data-testid="smaller"
        />
    )
    const input1 = screen.getByTestId("smaller")
    //fireEvent.mouseOver(input1);
    expect(input1).toHaveStyle(`height:38px`);
})
//expect(screen.queryByTestId("p_bold")).toHaveStyle(`fontWeight:700`);
//})
/** 
it("click", async() => {
    render(
         <Input
         data-testid='click_input'
       />
   )
   const element = screen.getByTestId('click_input')
   fireEvent.mouseOver(element)
   fireEvent.mouseMove(element)
   fireEvent.mouseDown(element)
   element.focus() 
   fireEvent.mouseUp(element)
   fireEvent.click(element)
   //userEvent.click(screen.getByTestId('click_input'))
   expect(screen.getByTestId('click_input')).toHaveStyle('background: #F2F2F2;');
})
/** 
it("hoverw", async() => {
     render(
          <Input
          data-testid="hov_input"
        />
    )
    const input1 = screen.getByTestId("hov_input")
    fireEvent.mouseOver(input1)
await new Promise((r) => setTimeout(r, 2000));
    //fireEvent.mouseEnter(input1);
    //userEvent.hover(input1)
    expect(input1).toHaveStyle(`background: #F2F2F2`);
})
*/
