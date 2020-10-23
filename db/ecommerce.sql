CREATE DATABASE ECOMMERCE;

USE ECOMMERCE;

CREATE TABLE usuarios 
(
	id_usuario int NOT NULL AUTO_INCREMENT ,
    txt_nombre VARCHAR(30) NOT NULL,
    txt_apellido VARCHAR(30) NOT NULL,
    nro_doc INT NOT NULL,
    txt_direccion VARCHAR(50) NOT NULL,
    fec_nacimiento DATE NOT NULL,
	txt_email VARCHAR(22) NOT NULL,
    txt_password VARCHAR(20) NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_usuario)
);

CREATE TABLE categorias
(
	id_categoria int NOT NULL AUTO_INCREMENT ,
    txt_desc VARCHAR(100) NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_categoria)
);

CREATE TABLE productos 
(
	id_producto int NOT NULL AUTO_INCREMENT ,
    id_categoria int NOT NULL ,
    txt_nombre VARCHAR(30) NOT NULL,
    txt_desc VARCHAR(100) NOT NULL,
    stock INT NOT NULL,
    sn_habilitado bit default 0,
    sn_eliminado bit default 0,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_producto),
    FOREIGN KEY (id_categoria) references categorias(id_categoria)
);

CREATE TABLE productos_imagenes
(
	id_producto_imagen int NOT NULL AUTO_INCREMENT,
    id_producto int NOT NULL,
    txt_path VARCHAR(30) NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_producto),
    FOREIGN KEY (id_producto_imagen) references productos(id_producto)
);

CREATE TABLE estado_pago 
(
	id_estado_pago int NOT NULL AUTO_INCREMENT,
	txt_desc VARCHAR(30) NOT NULL,
	ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY(id_estado_pago)
);	

CREATE TABLE compras
(
	id_compra int NOT NULL AUTO_INCREMENT,
    id_usuario int NOT NULL,
    token VARCHAR(30) NOT NULL,
    id_estado_pago INT NOT NULL,
    id_direccion_envio INT NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_compra),
    FOREIGN KEY (id_usuario) references usuarios(id_usuario),
    FOREIGN KEY (id_estado_pago) references estado_pago(id_estado_pago)
);

CREATE TABLE compra_producto 
(
	id_compra_producto int NOT NULL AUTO_INCREMENT,
    id_producto INT NOT NULL,
    id_compra INT NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_compra_producto),
    FOREIGN KEY (id_producto) references productos(id_producto),
    FOREIGN KEY (id_compra) references compras(id_compra)
);

CREATE TABLE provincia 
(
	id_provincia int NOT NULL AUTO_INCREMENT,
    txt_Desc VARCHAR(22) NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_provincia)
);

CREATE TABLE direccion_envio 
(
	id_direccion_envio int NOT NULL AUTO_INCREMENT,
    txt_direccion VARCHAR(100) NOT NULL,
    id_provincia INT NOT NULL, 
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_direccion_envio)
);

