# Practice Problems: Type Predicates

1. Will the following code result in a type error or execute without any issues?

```ts
type Vehicle =
  | {
      kind: "car";
      fuelType: "gas" | "electric";
      range: number;
    }
  | {
      type: "bicycle";
      isElectric: boolean;
    };

function getVehicleInfo(vehicle: Vehicle) {
  const info =
    (vehicle.kind === "car" &&
      `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
    (vehicle.type === "bicycle" &&
      `Bicycle with electric assist: ${vehicle.isElectric}`);
      
  console.log(info);
}

getVehicleInfo({ type: "bicycle", isElectric: true });
```

Yes. The properties `kind` and `type` are not common to both objects, and can't be used without narrowing within the function.
