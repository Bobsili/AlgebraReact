import { Avatar } from "./Avatar"

export function Message(props) {
    return (
        <div
            className="message"
            style={{
                backgroundColor: props.settings.backgroundColor || "transparent",
                color: props.settings.textColor || "black"
            }}
        >
            {props.settings.showAvatar && <div>
                <Avatar
                    username={props.settings.displayName || props.author}
                    src={props.settings.avatarUrl || "/avatar.svg"}
                />
            </div>}
            <div>{props.settings.displayName || props.author}</div>
            <div>{props.message}</div>
        </div>
    )
}