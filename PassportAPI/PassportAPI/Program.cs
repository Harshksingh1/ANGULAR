using Microsoft.EntityFrameworkCore;
using PassportAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// ✅ DbContext
builder.Services.AddDbContext<PassportDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("PassportDbContext")
        ?? throw new InvalidOperationException("Connection string not found")
    ));


builder.Services.AddEndpointsApiExplorer();

// 🔥 Swagger
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Controllers
builder.Services.AddControllers().AddJsonOptions(
    options => { options.JsonSerializerOptions.DictionaryKeyPolicy = null;
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

var app = builder.Build();

// Swagger middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAngular");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();