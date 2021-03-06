USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[UpdateProject]    Script Date: 3/26/2018 6:48:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[UpdateProject]
(
	@id INT
	, @ProjectName VARCHAR(200)
	, @ProjectDescription VARCHAR(1000)
)
AS
BEGIN
	UPDATE Management.Projects
	SET ProjectName = @ProjectName
		, ProjectDescription = @ProjectDescription
	WHERE Id = @id
END

