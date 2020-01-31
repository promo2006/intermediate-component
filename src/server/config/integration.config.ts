export const TYPE: string = '5.5'; // TYPE = 5.5 | INTEGRATED | OCC
export const IP: string = '192.168.2.199'; // Si es INTEGRATED u OCC debe ser la IP de cassandra, en el api i6 no hay método para obtener VCCs | si es 5.5 va la IP del SQL de Allegro.
export const IP_MW: string = '192.168.2.200'; // Si es INTEGRATED u OCC debe ser la IP de cassandra, en el api i6 no hay método para obtener VCCs | si es 5.5 va la IP del SQL de Allegro.
export const PORT: string = '9160'; // Puerto en caso la IP sea de cassandra.
export const PORT_MW: string = '8082'; // Puerto de Middleware de Allegro para la descarga de audios.
export const DNS: string = ''; // DNS en caso el tipo sea INTEGRATED u OCC.
