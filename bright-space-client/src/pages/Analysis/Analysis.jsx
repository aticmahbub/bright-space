import AreaChartComponent from "../../components/AreaChartComponent/AreaChartComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";


export default function Analysis() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="grid xl:grid-cols-1 lg:grid-cols-1 w-full gap-10 max-w-[1400px]">
                <GridItem title="Area Chart">
                    <LineChartComponent />
                </GridItem>

                <GridItem title="Bar Chart">
                    <BarChartComponent />
                </GridItem>

                <GridItem title="Line Chart">
                    <AreaChartComponent />
                </GridItem>
            </div>
        </main>
    );
}

function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            {children}
        </div>
    );
}