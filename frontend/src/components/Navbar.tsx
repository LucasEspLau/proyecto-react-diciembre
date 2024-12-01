export default function Navbar(){
    return(
        <nav className="bg-red-700 p-4 h-[10vh]">
            <ul className="flex flex-row items-center justify-around text-white font-extrabold text-md">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="#">Registro</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}