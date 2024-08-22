using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nunes_Sport.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProdutos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Codigo",
                table: "Produtos",
                newName: "CodFabricante");

            migrationBuilder.AddColumn<string>(
                name: "CodCategoria",
                table: "Produtos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodCategoria",
                table: "Produtos");

            migrationBuilder.RenameColumn(
                name: "CodFabricante",
                table: "Produtos",
                newName: "Codigo");
        }
    }
}
