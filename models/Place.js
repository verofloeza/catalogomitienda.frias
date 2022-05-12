class Place {
    constructor(id, title, image, marca, precio, descripcion, categoria, usuario) {
        this.id = id.toString();
        this.title = title;
        this.marca = marca;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.image = image;
        this.usuario = usuario;
    }
}

export default Place;