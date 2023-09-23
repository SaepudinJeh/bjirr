import ContainerChat from "@/components/chats/container.chat";
import DividerChat from "@/components/chats/divider.chat";
import LeftChat from "@/components/chats/left.chat";
import RightChat from "@/components/chats/right.chat";
import personaFemale from "@/assets/images/persona/rhs.jpg";
import NavbarCustom from "@/components/commons/navbar.common";

export default function FirstChat({ }) {
    return (
        <NavbarCustom>
            <ContainerChat>
                <DividerChat />

                <RightChat message="Dengan Matcha?" time="20:34" />

                <LeftChat photo={personaFemale} message="Dpet dari mna nomer ini?! &#128544;" time="20:37" />

                <RightChat message="Harus banget ya dijawab?" time="20:38" />

                <LeftChat photo={personaFemale} message="Blokir aja ya?" time="20:40" />

                <RightChat message="Tunggu dulu butuh waktu buat mikir" time="20:40" />

                <LeftChat photo={personaFemale} message="G" time="20:42" />
            </ContainerChat>
        </NavbarCustom>
    )
}