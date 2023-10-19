create database dbava;
use dbava;

drop table estudantes;


create table estudantes(
	id integer primary key auto_increment,
    nome varchar(20) not null,
    sobrenome varchar(20) not null,
    email varchar(20) not null,
    senha varchar(20) not null,
    carteirinha integer not null unique
);

insert into estudantes (nome, sobrenome, email, senha, carteirinha) values ("Leonardo","Garcia","leonardo@email.com","senha@123", 10002);
insert into estudantes (nome, sobrenome, email, senha, carteirinha) values ("Kezia","Barros","kezia@email.com","senha@123", 10003);

select * from estudantes;