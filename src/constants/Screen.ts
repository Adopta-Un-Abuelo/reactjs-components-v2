const ViewScreen ={
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
}

function getScreenSize(){
    const width = window.innerWidth;

    if(width <= ViewScreen.mobileS)
        return 'mobileS';
    else if(width <= ViewScreen.mobileM)
        return 'mobileM';
    else if(width <= ViewScreen.mobileL)
        return 'mobileL';
    else if(width <= ViewScreen.tablet)
        return 'tablet';
    else if(width <= ViewScreen.laptop)
        return 'laptop';
    else if(width <= ViewScreen.laptopL)
        return 'laptopL';
    else
        return 'desktop';
}

function isLessThan(screen: string){
    const width = window.innerWidth;

    if(screen === 'desktop'){
        if(width <= ViewScreen.desktop)
            return true;
        return false;
    }
    else if(screen === 'laptopL'){
        if(width <= ViewScreen.laptopL)
            return true;
        return false;
    }
    else if(screen === 'laptop'){
        if(width <= ViewScreen.laptop)
            return true;
        return false;
    }
    else if(screen === 'tablet'){
        if(width <= ViewScreen.tablet)
            return true;
        return false;
    }
    else if(screen === 'mobileL'){
        if(width <= ViewScreen.mobileL)
            return true;
        return false;
    }
    else if(screen === 'mobileM'){
        if(width <= ViewScreen.mobileM)
            return true;
        return false;
    }
    else if(screen === 'mobileS'){
        if(width <= ViewScreen.mobileS)
            return true;
        return false;
    }
}

function isGreaterThan(screen: string){
    const width = window.innerWidth;

    if(screen === 'desktop'){
        if(width >= ViewScreen.desktop)
            return true;
        return false;
    }
    else if(screen === 'laptopL'){
        if(width >= ViewScreen.laptopL)
            return true;
        return false;
    }
    else if(screen === 'laptop'){
        if(width >= ViewScreen.laptop)
            return true;
        return false;
    }
    else if(screen === 'tablet'){
        if(width >= ViewScreen.tablet)
            return true;
        return false;
    }
    else if(screen === 'mobileL'){
        if(width >= ViewScreen.mobileL)
            return true;
        return false;
    }
    else if(screen === 'mobileM'){
        if(width >= ViewScreen.mobileM)
            return true;
        return false;
    }
    else if(screen === 'mobileS'){
        if(width >= ViewScreen.mobileS)
            return true;
        return false;
    }
}

export {
    getScreenSize,
    isLessThan,
    isGreaterThan
}