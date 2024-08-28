using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nunes_Sport.API.Migrations
{
    /// <inheritdoc />
    public partial class CampoOpcional : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodCategoria",
                table: "Produtos");

            migrationBuilder.RenameColumn(
                name: "CodFabricante",
                table: "Produtos",
                newName: "Fabricante");

            migrationBuilder.AlterColumn<string>(
                name: "ImagemURL",
                table: "Produtos",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "Categoria",
                table: "Produtos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categoria",
                table: "Produtos");

            migrationBuilder.RenameColumn(
                name: "Fabricante",
                table: "Produtos",
                newName: "CodFabricante");

            migrationBuilder.AlterColumn<string>(
                name: "ImagemURL",
                table: "Produtos",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CodCategoria",
                table: "Produtos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
