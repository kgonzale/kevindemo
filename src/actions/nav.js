import Datatable from '../containers/panels/Datatable';

export const GOBACK = 'GOBACK';
// export function goBack() { return { type: GOBACK};}

export function goBack(){  
		alert('back!');
	return { type: GOBACK };
}

export const GO_MIDLIST = 'GO_MIDLIST';
export function go_MidList(parms){  
	return { type: GO_MIDLIST, panelSettings:{title: "MID List", parms: parms, panels: [[
					{panel: Datatable, className:"col-lg-10", panelTitle: "All MIDs", panelReloadBool:true}]]} };
}
