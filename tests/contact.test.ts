import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, validateContact } from "../src/lib/contact";

const valid = {
  name: "  Lucía Muñoz  ",
  service: "Dirección de obra",
  message: "  Quiero ampliar mi cocina.\n¿Podemos conversar?  ",
};

describe("consulta a WhatsApp", () => {
  it("preserva tildes, eñes, preguntas y saltos de línea en el mensaje", () => {
    const url = new URL(buildWhatsAppUrl(valid));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/5491173636120");
    expect(url.searchParams.get("text")).toBe(
      "Hola Mariana, soy Lucía Muñoz.\n\nMe interesa: Dirección de obra.\n\nQuiero ampliar mi cocina.\n¿Podemos conversar?",
    );
  });
  it("mantiene símbolos y enlaces del texto dentro de un único parámetro", () => {
    const url = new URL(
      buildWhatsAppUrl({
        ...valid,
        message: "Ideas & planos + diseño #1? x=2",
      }),
    );
    expect([...url.searchParams.keys()]).toEqual(["text"]);
    expect(url.searchParams.get("text")).toContain(
      "Ideas & planos + diseño #1? x=2",
    );
  });
  it("rechaza campos vacíos y servicios desconocidos", () => {
    expect(
      Object.keys(
        validateContact({ name: "  ", service: "otro", message: "\n" }),
      ),
    ).toEqual(["name", "service", "message"]);
    expect(() => buildWhatsAppUrl({ ...valid, message: " " })).toThrow();
  });
  it("admite asesoramiento y controla los límites de longitud", () => {
    expect(
      validateContact({ ...valid, service: "Quiero asesoramiento" }),
    ).toEqual({});
    expect(
      validateContact({
        ...valid,
        name: "a".repeat(101),
        message: "a".repeat(2001),
      }),
    ).toHaveProperty("name");
    expect(
      validateContact({ ...valid, message: "a".repeat(2001) }),
    ).toHaveProperty("message");
  });
});
