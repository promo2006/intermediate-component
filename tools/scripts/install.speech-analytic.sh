#!/bin/bash

###################################
# Descomprimo e instalo servicio  #
###################################

# Obtengo directorio de trabajo
wwwdir=/var/www

# Obtengo nombre del archivo a descomprimir
tarfile=`ls -t $wwwdir/*.tar.gz | grep -v backup | head -1`

# Me paro en directorio base
cd $wwwdir

# Hago backup de la carpeta actual
# tar zcvf $appName-backup.tar.gz $appName

# Descomprimo el paquete
if [ $appName != "speech-analytic" ]; then
    mv $appName speech-analytic
fi
tar zxvf $tarfile
if [ $appName != "speech-analytic" ]; then
    mv speech-analytic $appName
fi
cd $appName

#########################
# Reinicio el servicio  #
#########################

# Reinicio la aplicacion
cd ..
pm2 restart $appName
