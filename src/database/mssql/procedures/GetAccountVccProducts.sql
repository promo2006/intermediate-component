SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetAccountVccProducts]
(
	@InstallationId						VARCHAR(100),
	@VCC								VARCHAR(50)
)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS LAS BUSQUEDA DEL VCC POR EL INSTALLATIONID Y NOMBRE DEL VCC
	SELECT PL.[InstallationId] 'installationId',
			PL.[VCC] 'vcc', 
			PL.[Product] 'product',
			PL.[LicenseActivationDate] 'licenseActivationDate',
			PL.[LicenseExpirationDate] 'licenseExpirationDate',
			CASE
            WHEN PL.[LicenseExpirationDate] > GETUTCDATE()
               THEN 1
            ELSE 0
			END 'valid'
		FROM dbo.[PlatformLicenseUsage] PL 
		WHERE PL.[InstallationId] = @InstallationId
			AND PL.[VCC] = @VCC

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
