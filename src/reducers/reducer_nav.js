import Datatable from '../containers/panels/Datatable'

import {
	 GO_MIDLIST
} from '../actions/nav';

const INITIAL_STATE = {
						panelSettings:{title:"Home", parms:{}, panels:[[
							{panel: Datatable, className:"col-lg-10", panelTitle: "All MIDs", panelReloadBool:true}]]} };

export default function(state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
		case GO_MIDLIST:
			return { ...state, panelSettings:action.panelSettings};

		default:
			return state;
	}
}
