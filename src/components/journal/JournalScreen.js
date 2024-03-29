import React from 'react'
import {SideBar} from "./SideBar";
import {NothingSelected} from "./NothingSelected";
import {NoteScreen} from "../notes/NotesScreen";

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SideBar/>
            <main>
                {/*<NothingSelected/>*/}
                <NoteScreen/>
            </main>
        </div>
    )
}
