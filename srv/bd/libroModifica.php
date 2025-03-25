<?php

require_once __DIR__ . "/../../lib/php/validaTitulo.php";
require_once __DIR__ . "/../../lib/php/update.php";
require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/../modelo/TABLA_LIBRO.php";
require_once __DIR__ . "/../modelo/validaId.php";

/**
 * @param array{
 *   LIB_ID: string,
 *   LIB_TITULO: string,
 *   LIB_AUTOR: string,
 *   LIB_ISBN: string,
 *   LIB_EDITORIAL: string,
 *   LIB_MODIFICACION:int,
 *   LIB_ELIMINADO:int
 *  } $modelo
 */
function libroModifica(array $modelo)
{
 validaId($modelo[LIB_ID]);
 validaTitulo($modelo[LIB_TITULO]);
 validaAutor($modelo[LIB_AUTOR]);
 validaIsbn($modelo[LIB_ISBN]);
 validaEditorial($modelo[LIB_EDITORAL]);
 update(
  pdo: Bd::pdo(),
  table: LIBRO,
  set: $modelo,
  where: [LIB_ID => $modelo[LIB_ID]]
 );
}