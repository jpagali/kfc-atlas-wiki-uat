---
title: Stacked Multi-Condition Promotion
sidebar_label: Stacked Multi-Condition Promotion
---

# Stacked Multi-Condition Promotion

## Objetivo

Solo, los usuarios registrados obtienen un 10% de pedidos superiores a $25 los fines de semana.

## Necesidades

Todas las condiciones a continuación deben cumplirse.

| Zona | Campo | Valor |
|---|---|---|
| *Channel* | **Seleccionar canales** | `Mobile`, `iOS`, `Android` |
| **Estatus de usuario** | **¿Es cliente registrado?** | `Yes` |
| * Subtotal* | **Minimum Subtotal** | `$25.00` |
| *El marco temporal* | *El rango de día* | `Sa Su` |
| *El marco temporal* | ** Hora de inicio de la intervención** | `00:00:00` |
| *El marco temporal* | # Interval End Time # | `23:59:59` |

## Efectos

| Zona | Campo | Valor |
|---|---|---|
| * Nivel de ordenación* | **Tipo de efecto de fijación** | `Percent Off` |
| * Nivel de ordenación* | *Porcentaje* | `10` |
