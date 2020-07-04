import { Rol } from './Rol';

export class Usuario {

    private uid: string;
    private nombre: string;
    private apellido: string;
    private genero: string;
    private fecha_nac: Date;
    private correo: string;
    private contrasena: string;
    private especialidad: string;
    private telf: string;
    private direccion: string;
    private peso: string;
    private estatura: string;
    private pregunta_seguridad: string;
    private rol: Rol;

    public getUid(): string {
        return this.uid;
    }

    public setUid(uid: string): void {
        this.uid = uid;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getFecha_nac(): Date {
        return this.fecha_nac;
    }

    public setFecha_nac(fecha_nac: Date): void {
        this.fecha_nac = fecha_nac;
    }

    public getCorreo(): string {
        return this.correo;
    }

    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    public getContrasena(): string {
        return this.contrasena;
    }

    public setContrasena(contrasena: string): void {
        this.contrasena = contrasena;
    }

    public getEspecialidad(): string {
        return this.especialidad;
    }

    public setEspecialidad(especialidad: string): void {
        this.especialidad = especialidad;
    }

    public getTelf(): string {
        return this.telf;
    }

    public setTelf(telf: string): void {
        this.telf = telf;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getPeso(): string {
        return this.peso;
    }

    public setPeso(peso: string): void {
        this.peso = peso;
    }

    public getEstatura(): string {
        return this.estatura;
    }

    public setEstatura(estatura: string): void {
        this.estatura = estatura;
    }

    public getPregunta_seguridad(): string {
        return this.pregunta_seguridad;
    }

    public setPregunta_seguridad(pregunta_seguridad: string): void {
        this.pregunta_seguridad = pregunta_seguridad;
    }

    public getRol(): Rol {
        return this.rol;
    }

    public setRol(rol: Rol): void {
        this.rol = rol;
    }

}