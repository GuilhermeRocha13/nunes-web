using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Nunes_Sport.API.Data;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// builder.Services.AddCors(options =>
//     {
//         options.AddPolicy("AllowAll", builder =>
//             builder.AllowAnyOrigin()
//                    .AllowAnyMethod()
//                    .AllowAnyHeader());
//     });
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    //app.UseStaticFiles();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(cors => cors.AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .AllowAnyOrigin()
            );

// app.UseStaticFiles(new StaticFileOptions(){
//     FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Resources")),
//     RequestPath = new PathString("/Resources")
// });

app.Run();
