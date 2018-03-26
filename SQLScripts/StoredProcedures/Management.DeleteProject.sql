USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[DeleteProject]    Script Date: 3/26/2018 6:47:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[DeleteProject]
(
	@id INT
)
AS
BEGIN
	UPDATE Management.Projects
	SET IsActive = 0
	WHERE id = @id
END

