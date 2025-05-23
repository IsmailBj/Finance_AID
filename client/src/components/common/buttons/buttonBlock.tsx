import branchIcon from '../../../assets/icons/branchIcon.svg'
import chardIcon from '../../../assets/icons/chardIcon.svg'
import budgetIcon from '../../../assets/icons/moneyIcon.svg'
import cogIcon from '../../../assets/icons/cogIcon.svg'


export const BranchTreeBtn = () =>{

    return <a className="icon-block" href='/' ><img src={branchIcon} alt="branch icon missing" /></a> 
}

export const DashboardBtn = () =>{

    return <a className="icon-block" href='/' ><img src={chardIcon} alt="chard icon missing" /></a> 
}

export const BudgetIconBtn = () =>{

    return <a className="icon-block" href='/'><img src={budgetIcon} alt="budget icon missing" /></a> 
}

export const SettingsBtn = () =>{

    return <a className="icon-block" href='/'><img src={cogIcon} alt="cog icon missing" /></a> 
}